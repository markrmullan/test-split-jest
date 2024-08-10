test('sleep for 788 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 788));
});