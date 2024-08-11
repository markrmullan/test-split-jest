test('sleep for 311 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 311));
});