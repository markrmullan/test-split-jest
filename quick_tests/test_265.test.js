test('sleep for 398 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 398));
});