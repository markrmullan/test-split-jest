test('sleep for 967 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 967));
});