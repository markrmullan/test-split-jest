test('sleep for 301 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 301));
});