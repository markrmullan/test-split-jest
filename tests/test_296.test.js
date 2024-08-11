test('sleep for 13360 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 13360));
});