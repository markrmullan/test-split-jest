test('sleep for 572 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 572));
});