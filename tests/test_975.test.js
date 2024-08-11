test('sleep for 477 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 477));
});