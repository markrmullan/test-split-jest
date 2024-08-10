test('sleep for 232 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 232));
});