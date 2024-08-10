#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Number of test files to create
const numFiles = process.env.NUM_TESTS || 1000;
const testDir = path.join(__dirname, '../quick_tests');

// Ensure the test directory exists
if (!fs.existsSync(testDir)) {
  fs.mkdirSync(testDir);
}

for (let i = 0; i < numFiles; i++) {
  const fileName = `test_${i}.test.js`;
  const filePath = path.join(testDir, fileName);

  // Random duration between 50 and 1000 ms
  const sleepDuration = Math.floor(Math.random() * (1000 - 50 + 1)) + 50;

  const testContent = `
test('sleep for ${sleepDuration} ms', async () => {
  await new Promise(resolve => setTimeout(resolve, ${sleepDuration}));
});
  `;

  fs.writeFileSync(filePath, testContent.trim(), 'utf8');
  console.log(`Created ${fileName}`);
}

console.log('✅ Test files generated successfully.');
