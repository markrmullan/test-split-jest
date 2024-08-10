test('sleep for 994 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 994));
});