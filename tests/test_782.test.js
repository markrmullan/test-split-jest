test('sleep for 339 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 339));
});