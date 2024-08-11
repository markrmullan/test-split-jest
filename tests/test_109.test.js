test('sleep for 713 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 713));
});