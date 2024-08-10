test('sleep for 621 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 621));
});