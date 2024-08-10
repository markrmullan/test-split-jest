test('sleep for 712 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 712));
});