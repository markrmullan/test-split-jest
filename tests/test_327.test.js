test('sleep for 965 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 965));
});