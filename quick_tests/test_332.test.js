test('sleep for 178 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 178));
});