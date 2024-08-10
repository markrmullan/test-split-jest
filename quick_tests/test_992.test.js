test('sleep for 228 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 228));
});