test('sleep for 25277 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 25277));
});