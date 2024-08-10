test('sleep for 738 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 738));
});