test('sleep for 52 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 52));
});