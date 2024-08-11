test('sleep for 611 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 611));
});