test('sleep for 705 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 705));
});