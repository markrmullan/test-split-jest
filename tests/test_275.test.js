test('sleep for 376 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 376));
});