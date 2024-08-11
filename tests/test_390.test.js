test('sleep for 674 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 674));
});