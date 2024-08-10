test('sleep for 878 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 878));
});