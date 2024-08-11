test('sleep for 251 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 251));
});