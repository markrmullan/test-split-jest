test('sleep for 154 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 154));
});