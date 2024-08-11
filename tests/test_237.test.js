test('sleep for 16630 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 16630));
});