test('sleep for 998 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 998));
});