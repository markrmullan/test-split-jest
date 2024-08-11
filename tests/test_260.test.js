test('sleep for 240 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 240));
});