test('sleep for 335 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 335));
});