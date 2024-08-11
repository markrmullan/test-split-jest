test('sleep for 18975 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 18975));
});