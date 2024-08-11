test('sleep for 484 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 484));
});