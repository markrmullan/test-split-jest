test('sleep for 188 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 188));
});