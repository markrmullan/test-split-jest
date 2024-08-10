test('sleep for 702 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 702));
});