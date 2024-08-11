test('sleep for 140 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 140));
});