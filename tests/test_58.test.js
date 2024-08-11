test('sleep for 538 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 538));
});