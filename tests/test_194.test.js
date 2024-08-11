test('sleep for 559 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 559));
});