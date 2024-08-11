test('sleep for 114 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 114));
});