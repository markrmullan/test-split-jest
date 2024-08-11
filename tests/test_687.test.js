test('sleep for 53 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 53));
});