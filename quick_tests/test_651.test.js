test('sleep for 152 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 152));
});