test('sleep for 944 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 944));
});