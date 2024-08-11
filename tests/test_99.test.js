test('sleep for 379 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 379));
});