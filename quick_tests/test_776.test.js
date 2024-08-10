test('sleep for 176 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 176));
});