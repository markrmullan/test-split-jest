test('sleep for 906 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 906));
});