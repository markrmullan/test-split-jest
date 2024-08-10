test('sleep for 347 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 347));
});