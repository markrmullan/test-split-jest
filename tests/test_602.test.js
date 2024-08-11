test('sleep for 715 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 715));
});