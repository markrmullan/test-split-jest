test('sleep for 319 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 319));
});