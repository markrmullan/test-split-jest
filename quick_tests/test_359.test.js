test('sleep for 801 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 801));
});