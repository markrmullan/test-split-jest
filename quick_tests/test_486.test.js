test('sleep for 121 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 121));
});