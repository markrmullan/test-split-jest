test('sleep for 808 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 808));
});