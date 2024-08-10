test('sleep for 586 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 586));
});