test('sleep for 321 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 321));
});