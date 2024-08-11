test('sleep for 421 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 421));
});