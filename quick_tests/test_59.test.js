test('sleep for 242 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 242));
});