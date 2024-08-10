test('sleep for 597 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 597));
});