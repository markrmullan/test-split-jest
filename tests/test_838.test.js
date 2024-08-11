test('sleep for 146 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 146));
});