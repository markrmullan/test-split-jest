test('sleep for 259 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 259));
});