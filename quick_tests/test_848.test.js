test('sleep for 276 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 276));
});