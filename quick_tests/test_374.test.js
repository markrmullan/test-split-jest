test('sleep for 753 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 753));
});