test('sleep for 381 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 381));
});