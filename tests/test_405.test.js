test('sleep for 241 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 241));
});