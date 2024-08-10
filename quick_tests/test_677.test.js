test('sleep for 252 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 252));
});