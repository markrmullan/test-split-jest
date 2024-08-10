test('sleep for 313 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 313));
});