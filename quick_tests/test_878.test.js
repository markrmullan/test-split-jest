test('sleep for 467 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 467));
});