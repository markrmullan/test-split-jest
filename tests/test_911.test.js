test('sleep for 925 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 925));
});