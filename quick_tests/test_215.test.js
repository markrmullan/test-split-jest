test('sleep for 87 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 87));
});