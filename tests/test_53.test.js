test('sleep for 811 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 811));
});