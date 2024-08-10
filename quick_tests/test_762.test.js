test('sleep for 248 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 248));
});