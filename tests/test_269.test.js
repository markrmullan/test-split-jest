test('sleep for 764 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 764));
});