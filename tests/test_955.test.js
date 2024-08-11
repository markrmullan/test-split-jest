test('sleep for 286 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 286));
});