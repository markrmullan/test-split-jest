test('sleep for 92 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 92));
});