test('sleep for 365 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 365));
});