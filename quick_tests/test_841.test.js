test('sleep for 403 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 403));
});