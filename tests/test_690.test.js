test('sleep for 531 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 531));
});