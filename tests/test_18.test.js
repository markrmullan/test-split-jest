test('sleep for 751 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 751));
});