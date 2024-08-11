test('sleep for 862 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 862));
});