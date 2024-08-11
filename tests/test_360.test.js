test('sleep for 77 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 77));
});