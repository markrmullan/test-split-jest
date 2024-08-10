test('sleep for 566 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 566));
});