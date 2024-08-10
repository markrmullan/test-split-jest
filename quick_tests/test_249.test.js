test('sleep for 86 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 86));
});