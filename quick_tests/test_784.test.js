test('sleep for 684 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 684));
});