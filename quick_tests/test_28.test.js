test('sleep for 187 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 187));
});