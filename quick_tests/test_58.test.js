test('sleep for 427 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 427));
});