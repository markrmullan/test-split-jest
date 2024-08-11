test('sleep for 302 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 302));
});