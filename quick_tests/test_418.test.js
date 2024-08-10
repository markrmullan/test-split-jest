test('sleep for 511 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 511));
});