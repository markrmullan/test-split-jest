test('sleep for 798 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 798));
});