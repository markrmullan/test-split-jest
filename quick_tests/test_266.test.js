test('sleep for 333 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 333));
});