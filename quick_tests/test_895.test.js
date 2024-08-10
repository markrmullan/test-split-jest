test('sleep for 363 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 363));
});