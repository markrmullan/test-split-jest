#!/usr/bin/env node

const ciNodeIndex = process.env.CI_NODE_INDEX ?? 0;
const ciNodeTotal = process.env.CI_NODE_TOTAL ?? 1;

const args = process.argv.slice(2);
const totalNumTests = args.length;
if (totalNumTests === 0) {
  console.error('Error: No test cases provided.');
  process.exit(1);
}

const testsByNodeIndex = args.reduce((acc, testFileName, i) => {
  const nodeToAssign = i % ciNodeTotal;
  if (!acc[nodeToAssign]) {
    acc[nodeToAssign] = [];
  }
  acc[nodeToAssign].push(testFileName);
  return acc;
}, {});

// Output the tests for this node, will be piped to the next command
console.log(testsByNodeIndex[ciNodeIndex].join(' '));
