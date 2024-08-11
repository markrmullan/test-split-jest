test('sleep for 639 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 639));
});