test('sleep for 686 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 686));
});