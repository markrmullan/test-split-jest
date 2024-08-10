test('sleep for 268 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 268));
});