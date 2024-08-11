test('sleep for 125 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 125));
});