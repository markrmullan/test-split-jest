test('sleep for 970 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 970));
});