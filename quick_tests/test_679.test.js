test('sleep for 416 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 416));
});