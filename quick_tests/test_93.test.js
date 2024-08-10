test('sleep for 733 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 733));
});