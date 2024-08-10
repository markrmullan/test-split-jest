test('sleep for 368 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 368));
});