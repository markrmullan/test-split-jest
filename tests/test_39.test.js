test('sleep for 194 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 194));
});