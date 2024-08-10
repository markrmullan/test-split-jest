test('sleep for 353 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 353));
});