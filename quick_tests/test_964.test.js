test('sleep for 95 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 95));
});