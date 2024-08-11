test('sleep for 406 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 406));
});