test('sleep for 336 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 336));
});