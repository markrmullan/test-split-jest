test('sleep for 767 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 767));
});