test('sleep for 664 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 664));
});