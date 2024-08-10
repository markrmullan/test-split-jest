test('sleep for 879 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 879));
});