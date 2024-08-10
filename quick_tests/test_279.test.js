test('sleep for 779 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 779));
});