test('sleep for 295 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 295));
});