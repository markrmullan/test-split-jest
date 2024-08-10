test('sleep for 986 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 986));
});