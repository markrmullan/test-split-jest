test('sleep for 681 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 681));
});