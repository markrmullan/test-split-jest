test('sleep for 340 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 340));
});