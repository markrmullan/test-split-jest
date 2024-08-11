test('sleep for 784 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 784));
});