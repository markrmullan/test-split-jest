test('sleep for 447 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 447));
});