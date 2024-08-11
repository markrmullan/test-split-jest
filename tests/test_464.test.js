test('sleep for 361 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 361));
});