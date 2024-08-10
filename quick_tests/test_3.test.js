test('sleep for 651 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 651));
});