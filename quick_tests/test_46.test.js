test('sleep for 793 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 793));
});