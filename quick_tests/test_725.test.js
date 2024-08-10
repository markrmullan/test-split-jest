test('sleep for 369 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 369));
});