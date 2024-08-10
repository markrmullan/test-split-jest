test('sleep for 380 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 380));
});