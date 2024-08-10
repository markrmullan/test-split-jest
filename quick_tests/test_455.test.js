test('sleep for 103 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 103));
});