test('sleep for 486 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 486));
});