test('sleep for 815 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 815));
});