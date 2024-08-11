test('sleep for 350 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 350));
});