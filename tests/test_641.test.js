test('sleep for 921 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 921));
});