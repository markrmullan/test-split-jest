test('sleep for 127 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 127));
});