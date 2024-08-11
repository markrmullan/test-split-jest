test('sleep for 100 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 100));
});