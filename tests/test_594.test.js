test('sleep for 112 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 112));
});