test('sleep for 156 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 156));
});