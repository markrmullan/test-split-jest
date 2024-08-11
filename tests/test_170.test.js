test('sleep for 349 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 349));
});