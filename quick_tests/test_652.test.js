test('sleep for 958 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 958));
});