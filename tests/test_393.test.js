test('sleep for 462 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 462));
});