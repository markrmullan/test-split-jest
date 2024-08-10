test('sleep for 404 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 404));
});