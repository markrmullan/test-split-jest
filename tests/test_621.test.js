test('sleep for 337 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 337));
});