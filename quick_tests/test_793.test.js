test('sleep for 989 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 989));
});