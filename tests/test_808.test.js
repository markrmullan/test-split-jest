test('sleep for 117 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 117));
});