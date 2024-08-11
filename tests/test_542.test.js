test('sleep for 324 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 324));
});