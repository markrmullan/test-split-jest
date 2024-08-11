test('sleep for 243 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 243));
});