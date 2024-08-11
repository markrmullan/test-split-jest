test('sleep for 25663 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 25663));
});