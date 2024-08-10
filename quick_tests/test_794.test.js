test('sleep for 745 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 745));
});