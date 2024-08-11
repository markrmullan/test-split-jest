test('sleep for 859 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 859));
});