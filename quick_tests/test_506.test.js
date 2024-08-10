test('sleep for 142 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 142));
});