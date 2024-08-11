test('sleep for 22289 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 22289));
});