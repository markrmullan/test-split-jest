test('sleep for 667 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 667));
});