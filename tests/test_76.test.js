test('sleep for 216 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 216));
});