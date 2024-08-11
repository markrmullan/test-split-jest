test('sleep for 532 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 532));
});