test('sleep for 230 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 230));
});