test('sleep for 739 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 739));
});