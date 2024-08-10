test('sleep for 740 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 740));
});