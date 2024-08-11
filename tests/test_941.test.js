test('sleep for 22500 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 22500));
});