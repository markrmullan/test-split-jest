test('sleep for 75 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 75));
});