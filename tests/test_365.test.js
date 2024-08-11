test('sleep for 836 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 836));
});