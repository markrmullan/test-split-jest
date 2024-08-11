test('sleep for 85 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 85));
});