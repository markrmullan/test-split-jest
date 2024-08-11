test('sleep for 533 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 533));
});