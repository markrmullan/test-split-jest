test('sleep for 900 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 900));
});