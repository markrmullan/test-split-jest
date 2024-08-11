test('sleep for 96 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 96));
});