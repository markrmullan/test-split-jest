test('sleep for 440 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 440));
});