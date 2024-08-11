test('sleep for 626 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 626));
});