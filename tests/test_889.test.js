test('sleep for 128 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 128));
});