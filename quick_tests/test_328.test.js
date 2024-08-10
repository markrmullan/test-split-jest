test('sleep for 475 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 475));
});