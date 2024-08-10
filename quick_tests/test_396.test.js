test('sleep for 54 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 54));
});