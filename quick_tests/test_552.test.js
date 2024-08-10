test('sleep for 123 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 123));
});