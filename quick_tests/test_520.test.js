test('sleep for 724 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 724));
});