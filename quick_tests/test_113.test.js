test('sleep for 666 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 666));
});