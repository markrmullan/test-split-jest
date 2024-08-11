test('sleep for 388 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 388));
});