test('sleep for 378 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 378));
});