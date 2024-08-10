test('sleep for 799 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 799));
});