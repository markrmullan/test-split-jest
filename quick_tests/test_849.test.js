test('sleep for 904 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 904));
});