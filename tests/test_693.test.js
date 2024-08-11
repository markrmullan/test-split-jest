test('sleep for 16740 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 16740));
});