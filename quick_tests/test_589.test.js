test('sleep for 261 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 261));
});