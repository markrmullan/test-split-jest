test('sleep for 345 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 345));
});