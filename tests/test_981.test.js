test('sleep for 759 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 759));
});