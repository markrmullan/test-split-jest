test('sleep for 500 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
});