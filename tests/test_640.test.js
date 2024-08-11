test('sleep for 119 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 119));
});