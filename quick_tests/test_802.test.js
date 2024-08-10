test('sleep for 83 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 83));
});