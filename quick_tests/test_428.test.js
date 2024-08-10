test('sleep for 391 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 391));
});