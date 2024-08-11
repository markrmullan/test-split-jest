test('sleep for 273 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 273));
});