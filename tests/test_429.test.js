test('sleep for 527 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 527));
});