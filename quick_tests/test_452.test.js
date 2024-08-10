test('sleep for 847 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 847));
});