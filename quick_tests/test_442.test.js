test('sleep for 545 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 545));
});