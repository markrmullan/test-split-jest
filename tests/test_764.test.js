test('sleep for 794 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 794));
});