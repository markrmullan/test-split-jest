test('sleep for 750 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 750));
});