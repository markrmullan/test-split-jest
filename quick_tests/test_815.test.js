test('sleep for 126 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 126));
});