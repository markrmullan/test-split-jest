test('sleep for 312 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 312));
});