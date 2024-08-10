test('sleep for 520 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 520));
});