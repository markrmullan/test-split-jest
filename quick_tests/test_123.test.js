test('sleep for 124 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 124));
});