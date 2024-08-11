test('sleep for 329 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 329));
});