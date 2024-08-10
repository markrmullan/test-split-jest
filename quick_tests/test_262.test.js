test('sleep for 499 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 499));
});