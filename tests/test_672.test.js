test('sleep for 67 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 67));
});