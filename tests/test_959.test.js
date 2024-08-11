test('sleep for 584 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 584));
});