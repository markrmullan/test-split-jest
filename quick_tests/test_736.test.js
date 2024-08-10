test('sleep for 69 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 69));
});