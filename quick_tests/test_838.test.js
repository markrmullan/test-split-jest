test('sleep for 137 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 137));
});