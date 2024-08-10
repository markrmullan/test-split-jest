test('sleep for 835 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 835));
});