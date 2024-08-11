test('sleep for 283 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 283));
});