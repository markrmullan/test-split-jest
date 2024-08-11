test('sleep for 322 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 322));
});