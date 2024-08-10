test('sleep for 755 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 755));
});