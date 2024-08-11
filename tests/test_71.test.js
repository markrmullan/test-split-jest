test('sleep for 791 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 791));
});