test('sleep for 130 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 130));
});