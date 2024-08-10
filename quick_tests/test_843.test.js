test('sleep for 386 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 386));
});