test('sleep for 737 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 737));
});