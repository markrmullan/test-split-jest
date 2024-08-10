test('sleep for 883 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 883));
});