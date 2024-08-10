test('sleep for 529 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 529));
});