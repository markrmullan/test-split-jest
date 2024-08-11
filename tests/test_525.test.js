test('sleep for 296 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 296));
});