test('sleep for 81 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 81));
});