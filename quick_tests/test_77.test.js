test('sleep for 93 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 93));
});