test('sleep for 771 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 771));
});