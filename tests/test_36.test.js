test('sleep for 222 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 222));
});