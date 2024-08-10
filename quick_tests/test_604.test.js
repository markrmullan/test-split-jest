test('sleep for 490 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 490));
});