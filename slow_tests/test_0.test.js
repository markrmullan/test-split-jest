test('sleep for 10586 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 10586));
});
