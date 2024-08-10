test('sleep for 803 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 803));
});