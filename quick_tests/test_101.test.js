test('sleep for 108 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 108));
});