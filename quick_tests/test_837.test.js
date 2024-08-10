test('sleep for 735 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 735));
});