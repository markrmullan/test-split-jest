test('sleep for 249 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 249));
});