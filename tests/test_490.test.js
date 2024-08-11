test('sleep for 823 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 823));
});