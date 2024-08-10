test('sleep for 507 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 507));
});