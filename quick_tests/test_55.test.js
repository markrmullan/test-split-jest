test('sleep for 946 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 946));
});