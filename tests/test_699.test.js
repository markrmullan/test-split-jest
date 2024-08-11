test('sleep for 526 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 526));
});