test('sleep for 24293 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 24293));
});