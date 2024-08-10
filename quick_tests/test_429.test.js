test('sleep for 744 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 744));
});