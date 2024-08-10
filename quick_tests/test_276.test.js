test('sleep for 607 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 607));
});