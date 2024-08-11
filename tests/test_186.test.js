test('sleep for 846 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 846));
});