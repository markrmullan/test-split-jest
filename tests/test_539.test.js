test('sleep for 229 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 229));
});