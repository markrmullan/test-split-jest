test('sleep for 680 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 680));
});