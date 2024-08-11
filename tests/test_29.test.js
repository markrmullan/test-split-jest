test('sleep for 25970 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 25970));
});