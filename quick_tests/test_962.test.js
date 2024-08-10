test('sleep for 826 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 826));
});