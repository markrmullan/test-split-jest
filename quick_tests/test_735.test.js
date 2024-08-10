test('sleep for 76 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 76));
});