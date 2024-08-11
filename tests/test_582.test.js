test('sleep for 613 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 613));
});