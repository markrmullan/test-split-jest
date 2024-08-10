test('sleep for 420 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 420));
});