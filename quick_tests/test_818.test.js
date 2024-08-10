test('sleep for 265 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 265));
});