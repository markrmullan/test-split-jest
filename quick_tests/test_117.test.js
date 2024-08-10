test('sleep for 161 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 161));
});