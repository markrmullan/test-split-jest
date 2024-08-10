test('sleep for 616 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 616));
});