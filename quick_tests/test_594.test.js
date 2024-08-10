test('sleep for 903 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 903));
});