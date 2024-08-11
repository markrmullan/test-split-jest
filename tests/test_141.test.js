test('sleep for 718 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 718));
});