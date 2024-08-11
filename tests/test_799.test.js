test('sleep for 765 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 765));
});