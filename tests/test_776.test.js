test('sleep for 629 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 629));
});