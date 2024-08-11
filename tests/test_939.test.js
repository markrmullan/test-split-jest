test('sleep for 517 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 517));
});