test('sleep for 173 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 173));
});