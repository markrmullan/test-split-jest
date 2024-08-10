test('sleep for 787 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 787));
});