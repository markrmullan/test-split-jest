test('sleep for 922 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 922));
});