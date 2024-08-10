test('sleep for 439 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 439));
});