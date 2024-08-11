test('sleep for 549 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 549));
});