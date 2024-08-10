test('sleep for 954 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 954));
});