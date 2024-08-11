test('sleep for 792 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 792));
});