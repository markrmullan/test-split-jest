test('sleep for 171 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 171));
});