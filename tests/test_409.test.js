test('sleep for 501 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 501));
});