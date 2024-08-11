test('sleep for 414 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 414));
});