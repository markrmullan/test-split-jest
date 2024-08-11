test('sleep for 557 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 557));
});