test('sleep for 593 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 593));
});