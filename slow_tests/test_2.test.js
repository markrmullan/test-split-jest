test('sleep for 2094 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 2094));
});
