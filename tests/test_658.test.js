test('sleep for 167 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 167));
});