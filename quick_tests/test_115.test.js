test('sleep for 535 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 535));
});