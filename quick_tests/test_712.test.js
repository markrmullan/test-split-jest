test('sleep for 749 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 749));
});