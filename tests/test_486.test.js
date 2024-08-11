test('sleep for 382 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 382));
});