test('sleep for 402 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 402));
});