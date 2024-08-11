test('sleep for 450 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 450));
});