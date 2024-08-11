test('sleep for 783 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 783));
});