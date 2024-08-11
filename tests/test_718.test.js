test('sleep for 306 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 306));
});