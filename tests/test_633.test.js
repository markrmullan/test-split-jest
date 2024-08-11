test('sleep for 963 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 963));
});