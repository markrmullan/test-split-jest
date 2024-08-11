test('sleep for 84 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 84));
});