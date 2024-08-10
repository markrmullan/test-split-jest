test('sleep for 304 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 304));
});