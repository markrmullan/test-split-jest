test('sleep for 562 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 562));
});