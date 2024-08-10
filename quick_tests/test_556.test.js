test('sleep for 494 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 494));
});