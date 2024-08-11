test('sleep for 316 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 316));
});