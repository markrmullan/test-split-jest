test('sleep for 401 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 401));
});