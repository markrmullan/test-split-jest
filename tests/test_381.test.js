test('sleep for 432 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 432));
});