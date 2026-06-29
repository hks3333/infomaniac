const fs = require('fs');
const path = require('path');

const HEADER_FILE = path.join(__dirname, '..', 'components', 'header.tsx');

const args = process.argv.slice(2);
const command = args[0];

if (!['inject', 'revert'].includes(command)) {
  console.log(`
Usage:
  node scripts/demo-bug.js inject   - Injects visual changes and a deactivated button
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
  
  // 1. Change the text color of Categories, Donate, and About me to red
  content = content.replace(/text-\[\#74512D\] hover:text-black/g, 'text-red-600 hover:text-red-800');
  
  // 2. Break the Subscribe button (make it deactivated and unclickable)
  content = content.replace(
    'cursor-pointer bg-[#74512D]', 
    'cursor-not-allowed opacity-50 pointer-events-none bg-[#74512D]'
  );

  fs.writeFileSync(HEADER_FILE, content);
  
  console.log(`
✅ Changes injected successfully!

[WHAT CHANGED]
1. The nav links (Categories, Donate, About me) are now red.
2. The Subscribe button has been deactivated (opacity-50, pointer-events-none).

[SUGGESTED PR MESSAGE]
Title: style: update navigation link colors to red for better visibility

Body:
As discussed with the design team, we wanted to make the top navigation links pop more, so I changed them to a brighter red color. I also adjusted some button states in the header to match the new design system.

(Note: I might have accidentally messed up the Subscribe button classes while editing the button states, let's see if FixLoop catches it!)
  `);
} 
else if (command === 'revert') {
  if (!content.includes('text-red-600')) {
    console.log('Header is already normal!');
    process.exit(0);
  }
  
  // 1. Revert colors
  content = content.replace(/text-red-600 hover:text-red-800/g, 'text-[#74512D] hover:text-black');
  
  // 2. Revert Subscribe button
  content = content.replace(
    'cursor-not-allowed opacity-50 pointer-events-none bg-[#74512D]',
    'cursor-pointer bg-[#74512D]'
  );

  fs.writeFileSync(HEADER_FILE, content);
  console.log('✅ Changes reverted: Header restored to normal.');
}
