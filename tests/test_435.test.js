test('sleep for 11788 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 11788));
});