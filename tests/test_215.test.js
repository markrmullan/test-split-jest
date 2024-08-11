test('sleep for 632 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 632));
});