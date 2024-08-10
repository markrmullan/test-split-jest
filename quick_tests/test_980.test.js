test('sleep for 657 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 657));
});