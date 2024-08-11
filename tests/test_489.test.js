test('sleep for 71 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 71));
});