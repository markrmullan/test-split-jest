test('sleep for 374 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 374));
});