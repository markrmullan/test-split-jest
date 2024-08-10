test('sleep for 748 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 748));
});