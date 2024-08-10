test('sleep for 479 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 479));
});