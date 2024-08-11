test('sleep for 762 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 762));
});