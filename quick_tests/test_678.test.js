test('sleep for 691 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 691));
});