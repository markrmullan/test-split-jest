test('sleep for 133 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 133));
});