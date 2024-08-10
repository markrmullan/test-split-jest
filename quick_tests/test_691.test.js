test('sleep for 56 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 56));
});