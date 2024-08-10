test('sleep for 257 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 257));
});