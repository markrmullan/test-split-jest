test('sleep for 275 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 275));
});