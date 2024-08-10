test('sleep for 284 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 284));
});