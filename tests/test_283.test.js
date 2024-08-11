test('sleep for 10787 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 10787));
});