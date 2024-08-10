test('sleep for 833 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 833));
});