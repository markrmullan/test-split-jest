test('sleep for 825 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 825));
});