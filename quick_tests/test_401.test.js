test('sleep for 424 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 424));
});