test('sleep for 223 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 223));
});