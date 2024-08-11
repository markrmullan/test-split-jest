test('sleep for 397 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 397));
});