test('sleep for 99 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 99));
});