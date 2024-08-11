test('sleep for 169 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 169));
});