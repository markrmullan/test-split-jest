test('sleep for 136 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 136));
});