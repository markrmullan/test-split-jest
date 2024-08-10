test('sleep for 98 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 98));
});