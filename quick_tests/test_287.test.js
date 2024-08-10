test('sleep for 582 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 582));
});