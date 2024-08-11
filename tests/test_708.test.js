test('sleep for 12501 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 12501));
});