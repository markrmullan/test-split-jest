test('sleep for 604 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 604));
});