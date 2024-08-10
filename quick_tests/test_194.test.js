test('sleep for 778 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 778));
});