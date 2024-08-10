test('sleep for 102 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 102));
});