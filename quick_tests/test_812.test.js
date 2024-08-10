test('sleep for 134 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 134));
});