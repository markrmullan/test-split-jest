test('sleep for 476 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 476));
});