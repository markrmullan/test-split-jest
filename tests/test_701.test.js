test('sleep for 358 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 358));
});