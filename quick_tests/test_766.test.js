test('sleep for 987 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 987));
});