test('sleep for 964 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 964));
});