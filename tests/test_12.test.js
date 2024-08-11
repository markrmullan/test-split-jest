test('sleep for 488 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 488));
});