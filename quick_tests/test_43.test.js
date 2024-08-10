test('sleep for 50 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 50));
});