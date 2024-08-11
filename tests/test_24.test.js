test('sleep for 120 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 120));
});