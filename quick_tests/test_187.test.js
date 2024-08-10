test('sleep for 323 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 323));
});