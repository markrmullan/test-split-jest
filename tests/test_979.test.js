test('sleep for 524 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 524));
});