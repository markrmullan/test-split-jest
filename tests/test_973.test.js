test('sleep for 396 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 396));
});