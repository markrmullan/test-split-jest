test('sleep for 721 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 721));
});