test('sleep for 263 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 263));
});