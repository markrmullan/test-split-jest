test('sleep for 258 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 258));
});