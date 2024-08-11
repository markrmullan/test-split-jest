test('sleep for 1000 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
});