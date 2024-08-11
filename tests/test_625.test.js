test('sleep for 649 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 649));
});