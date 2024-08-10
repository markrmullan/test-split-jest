test('sleep for 97 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 97));
});