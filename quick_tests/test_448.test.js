test('sleep for 452 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 452));
});