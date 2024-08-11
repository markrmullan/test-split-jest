test('sleep for 289 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 289));
});