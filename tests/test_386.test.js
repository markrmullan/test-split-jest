test('sleep for 195 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 195));
});