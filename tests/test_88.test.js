test('sleep for 930 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 930));
});