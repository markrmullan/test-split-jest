test('sleep for 975 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 975));
});