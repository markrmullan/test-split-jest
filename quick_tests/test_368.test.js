test('sleep for 663 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 663));
});