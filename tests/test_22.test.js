test('sleep for 68 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 68));
});