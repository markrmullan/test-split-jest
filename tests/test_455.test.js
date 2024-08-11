test('sleep for 159 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 159));
});