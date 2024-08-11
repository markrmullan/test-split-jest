test('sleep for 122 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 122));
});