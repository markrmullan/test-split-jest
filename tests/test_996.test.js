test('sleep for 881 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 881));
});