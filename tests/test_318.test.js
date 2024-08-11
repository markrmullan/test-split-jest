test('sleep for 24841 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 24841));
});