test('sleep for 15998 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 15998));
});