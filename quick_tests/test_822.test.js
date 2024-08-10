test('sleep for 580 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 580));
});