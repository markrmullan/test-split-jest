test('sleep for 888 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 888));
});