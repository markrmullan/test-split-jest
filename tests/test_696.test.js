test('sleep for 24713 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 24713));
});