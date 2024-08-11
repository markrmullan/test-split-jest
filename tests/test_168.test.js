test('sleep for 106 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 106));
});