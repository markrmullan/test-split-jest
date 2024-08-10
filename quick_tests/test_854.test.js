test('sleep for 950 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 950));
});