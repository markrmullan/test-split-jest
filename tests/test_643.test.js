test('sleep for 375 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 375));
});