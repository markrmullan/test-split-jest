test('sleep for 239 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 239));
});