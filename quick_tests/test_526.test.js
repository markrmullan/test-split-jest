test('sleep for 623 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 623));
});