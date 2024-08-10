test('sleep for 255 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 255));
});