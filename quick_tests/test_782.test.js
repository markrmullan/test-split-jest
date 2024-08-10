test('sleep for 410 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 410));
});