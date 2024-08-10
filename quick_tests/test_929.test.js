test('sleep for 766 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 766));
});