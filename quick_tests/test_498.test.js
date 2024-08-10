test('sleep for 449 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 449));
});