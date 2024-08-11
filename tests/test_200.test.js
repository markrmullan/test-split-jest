test('sleep for 442 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 442));
});