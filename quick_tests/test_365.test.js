test('sleep for 480 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 480));
});