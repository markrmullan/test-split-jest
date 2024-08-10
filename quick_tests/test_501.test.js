test('sleep for 457 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 457));
});