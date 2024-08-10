test('sleep for 898 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 898));
});