test('sleep for 72 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 72));
});