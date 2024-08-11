test('sleep for 485 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 485));
});