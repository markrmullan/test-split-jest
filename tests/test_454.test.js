test('sleep for 701 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 701));
});