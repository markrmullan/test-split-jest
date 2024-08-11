test('sleep for 19264 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 19264));
});