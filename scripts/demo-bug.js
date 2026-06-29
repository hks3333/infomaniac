const fs = require('fs');
const path = require('path');

const HEADER_FILE = path.join(__dirname, '..', 'components', 'header.tsx');

const args = process.argv.slice(2);
const command = args[0];

if (!['inject', 'revert'].includes(command)) {
  console.log(`
Usage:
  node scripts/demo-bug.js inject   - Injects the text change and the accidental red colors
  node scripts/demo-bug.js revert   - Reverts the header back to normal
`);
  process.exit(1);
}

let content = fs.readFileSync(HEADER_FILE, 'utf-8');

if (command === 'inject') {
  if (content.includes('text-red-600')) {
    console.log('Bug is already injected!');
    process.exit(0);
  }
  
  // 1. INTENTIONAL CHANGE: Change "About me" text to "About"
  content = content.replace(/>About me</g, '>About<');
  
  // 2. UNINTENTIONAL BUG: Change the text color of Categories, Donate, and About to red
  // (Simulating a CSS class mistake by the developer)
  content = content.replace(/text-\[\#74512D\] hover:text-black/g, 'text-red-600 hover:text-red-800');

  fs.writeFileSync(HEADER_FILE, content);
  
  console.log(`
✅ Changes injected successfully!

[WHAT CHANGED]
1. Intentional: "About me" text is now "About".
2. Accidental: All the navigation links turned red due to a bad copy-paste!

[SUGGESTED PR MESSAGE]
Title: refactor: change About Me link text to just About

Body:
The design team requested that we shorten the "About me" navigation link to just "About" to save some horizontal space in the header. 

This PR only updates that text string, no styling changes were made!
  `);
} 
else if (command === 'revert') {
  if (!content.includes('text-red-600')) {
    console.log('Header is already normal!');
    process.exit(0);
  }
  
  // 1. Revert text
  content = content.replace(/>About</g, '>About me<');
  
  // 2. Revert colors
  content = content.replace(/text-red-600 hover:text-red-800/g, 'text-[#74512D] hover:text-black');
  
  fs.writeFileSync(HEADER_FILE, content);
  console.log('✅ Changes reverted: Header restored to normal.');
}
