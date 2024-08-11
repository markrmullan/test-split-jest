test('sleep for 620 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 620));
});