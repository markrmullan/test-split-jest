test('sleep for 147 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 147));
});