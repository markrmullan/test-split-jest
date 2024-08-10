test('sleep for 164 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 164));
});