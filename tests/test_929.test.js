test('sleep for 10573 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 10573));
});