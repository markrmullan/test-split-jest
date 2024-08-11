test('sleep for 636 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 636));
});