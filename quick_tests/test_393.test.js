test('sleep for 318 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 318));
});