#!/usr/bin/env node

const { existsSync, mkdirSync, writeFileSync, rmSync } = require('fs');
const { join } = require('path');
const { generateRandomNumber } = require('./random');

// Number of test files to create
const shouldClean = process.env.CLEAN ?? true;
const numTests = process.env.NUM_TESTS || 1000;
const slowTestPercentage = process.env.SLOW_TEST_PERCENTAGE ?? 10;
const testDir = join(__dirname, '../tests');

if (shouldClean) {
  rmSync(testDir, { recursive: true, force: true });
}

if (!existsSync(testDir)) {
  mkdirSync(testDir);
}

let numSlowTests = 0;

for (let i = 0; i < numTests; i++) {
  const fileName = `test_${i}.test.js`;
  const filePath = join(testDir, fileName);

  let sleepDuration = generateRandomNumber(50, 1000);
  const isSlowTest = (Math.random() * 100) < slowTestPercentage;

  if (isSlowTest) {
    sleepDuration += generateRandomNumber(10_000, 30_000);
    numSlowTests++;
  }

  const testContent = `
test('sleep for ${sleepDuration} ms', async () => {
  await new Promise(resolve => setTimeout(resolve, ${sleepDuration}));
});
  `;

  writeFileSync(filePath, testContent.trim(), 'utf8');
  console.log(`Created ${fileName}`);
}

console.table([
  ["# Slow Tests", numSlowTests],
  ["# Quick Tests", numTests - numSlowTests],
]);
console.log('✅ Test files generated successfully.');
