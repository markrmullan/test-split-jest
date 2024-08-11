test('sleep for 830 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 830));
});