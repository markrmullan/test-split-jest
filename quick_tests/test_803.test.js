test('sleep for 189 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 189));
});