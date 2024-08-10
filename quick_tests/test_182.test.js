test('sleep for 78 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 78));
});