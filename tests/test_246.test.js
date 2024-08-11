test('sleep for 74 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 74));
});