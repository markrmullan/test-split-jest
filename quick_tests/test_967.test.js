test('sleep for 677 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 677));
});