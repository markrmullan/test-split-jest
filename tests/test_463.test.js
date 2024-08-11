test('sleep for 245 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 245));
});