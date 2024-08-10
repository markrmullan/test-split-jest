test('sleep for 455 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 455));
});