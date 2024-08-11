test('sleep for 148 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 148));
});