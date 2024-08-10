test('sleep for 88 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 88));
});