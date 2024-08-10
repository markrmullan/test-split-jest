test('sleep for 334 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 334));
});