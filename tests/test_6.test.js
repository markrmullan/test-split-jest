test('sleep for 795 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 795));
});