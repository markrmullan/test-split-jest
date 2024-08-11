test('sleep for 150 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 150));
});