test('sleep for 959 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 959));
});