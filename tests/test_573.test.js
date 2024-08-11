test('sleep for 331 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 331));
});