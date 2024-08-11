test('sleep for 993 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 993));
});