test('sleep for 730 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 730));
});