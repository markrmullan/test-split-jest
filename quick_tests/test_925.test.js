test('sleep for 673 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 673));
});