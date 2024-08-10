test('sleep for 931 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 931));
});