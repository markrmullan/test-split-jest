test('sleep for 417 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 417));
});