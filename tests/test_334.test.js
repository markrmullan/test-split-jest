test('sleep for 602 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 602));
});