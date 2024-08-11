test('sleep for 360 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 360));
});