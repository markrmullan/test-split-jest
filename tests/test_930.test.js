test('sleep for 393 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 393));
});