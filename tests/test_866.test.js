test('sleep for 892 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 892));
});