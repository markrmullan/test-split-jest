test('sleep for 307 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 307));
});