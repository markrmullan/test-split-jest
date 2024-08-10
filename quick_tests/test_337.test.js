test('sleep for 280 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 280));
});