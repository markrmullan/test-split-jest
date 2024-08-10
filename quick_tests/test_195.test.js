test('sleep for 109 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 109));
});