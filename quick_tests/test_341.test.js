test('sleep for 601 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 601));
});