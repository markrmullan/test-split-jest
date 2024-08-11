test('sleep for 662 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 662));
});