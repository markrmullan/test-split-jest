test('sleep for 338 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 338));
});