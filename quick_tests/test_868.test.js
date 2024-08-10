test('sleep for 204 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 204));
});