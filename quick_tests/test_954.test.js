test('sleep for 105 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 105));
});