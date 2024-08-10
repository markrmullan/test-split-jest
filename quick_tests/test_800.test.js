test('sleep for 615 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 615));
});