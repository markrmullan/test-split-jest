test('sleep for 172 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 172));
});