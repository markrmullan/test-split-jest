test('sleep for 850 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 850));
});