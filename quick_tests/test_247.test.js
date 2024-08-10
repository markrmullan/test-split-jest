test('sleep for 617 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 617));
});