test('sleep for 758 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 758));
});