test('sleep for 94 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 94));
});