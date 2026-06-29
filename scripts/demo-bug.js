const fs = require('fs');
const path = require('path');

const HEADER_FILE = path.join(__dirname, '..', 'components', 'header.tsx');

const args = process.argv.slice(2);
const command = args[0];

if (!['inject', 'revert'].includes(command)) {
  console.log(`
Usage:
  node scripts/demo-bug.js inject   - Injects a z-index bug into the header
  node scripts/demo-bug.js revert   - Reverts the header back to normal
`);
  process.exit(1);
}

let content = fs.readFileSync(HEADER_FILE, 'utf-8');

if (command === 'inject') {
  if (content.includes('z-[-1]')) {
    console.log('Bug is already injected!');
    process.exit(0);
  }
  // Replace z-50 with z-[-1] which breaks the interactivity of the header and subscribe button
  content = content.replace('z-50', 'z-[-1]');
  fs.writeFileSync(HEADER_FILE, content);
  console.log('✅ Bug injected: Changed header z-index to -1. The navigation and subscribe buttons are now unclickable!');
} 
else if (command === 'revert') {
  if (content.includes('z-50')) {
    console.log('Header is already normal!');
    process.exit(0);
  }
  content = content.replace('z-[-1]', 'z-50');
  fs.writeFileSync(HEADER_FILE, content);
  console.log('✅ Bug reverted: Header restored to normal.');
}
