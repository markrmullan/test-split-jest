test('sleep for 600 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 600));
});