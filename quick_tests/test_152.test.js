test('sleep for 186 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 186));
});