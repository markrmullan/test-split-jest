test('sleep for 732 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 732));
});