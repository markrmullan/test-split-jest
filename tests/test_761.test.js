test('sleep for 168 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 168));
});