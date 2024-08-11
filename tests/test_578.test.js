test('sleep for 89 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 89));
});