test('sleep for 160 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 160));
});