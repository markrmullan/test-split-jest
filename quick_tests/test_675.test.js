test('sleep for 990 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 990));
});