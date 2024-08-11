test('sleep for 869 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 869));
});