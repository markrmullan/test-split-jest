test('sleep for 90 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 90));
});