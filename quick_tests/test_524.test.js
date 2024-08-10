test('sleep for 908 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 908));
});