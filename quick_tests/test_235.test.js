test('sleep for 661 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 661));
});