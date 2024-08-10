test('sleep for 80 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 80));
});