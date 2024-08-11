test('sleep for 756 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 756));
});