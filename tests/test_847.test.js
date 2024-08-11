test('sleep for 643 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 643));
});