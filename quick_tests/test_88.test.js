test('sleep for 79 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 79));
});