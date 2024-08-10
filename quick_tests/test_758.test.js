test('sleep for 955 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 955));
});