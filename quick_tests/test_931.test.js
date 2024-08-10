test('sleep for 212 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 212));
});