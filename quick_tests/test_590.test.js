test('sleep for 509 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 509));
});