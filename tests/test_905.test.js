test('sleep for 377 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 377));
});