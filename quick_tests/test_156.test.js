test('sleep for 82 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 82));
});