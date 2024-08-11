test('sleep for 332 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 332));
});