test('sleep for 18662 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 18662));
});