test('sleep for 498 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 498));
});