test('sleep for 687 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 687));
});