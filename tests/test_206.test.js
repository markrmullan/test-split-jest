test('sleep for 22302 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 22302));
});