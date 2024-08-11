test('sleep for 551 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 551));
});