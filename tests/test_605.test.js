test('sleep for 73 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 73));
});