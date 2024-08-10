test('sleep for 654 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 654));
});