test('sleep for 58 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 58));
});