test('sleep for 346 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 346));
});