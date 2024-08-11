test('sleep for 390 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 390));
});