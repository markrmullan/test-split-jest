test('sleep for 107 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 107));
});