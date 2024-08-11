test('sleep for 642 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 642));
});