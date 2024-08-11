test('sleep for 446 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 446));
});