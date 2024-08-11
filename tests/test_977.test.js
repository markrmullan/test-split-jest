test('sleep for 64 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 64));
});