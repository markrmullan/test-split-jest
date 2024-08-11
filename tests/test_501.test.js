test('sleep for 279 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 279));
});