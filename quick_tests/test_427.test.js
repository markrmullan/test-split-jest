test('sleep for 149 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 149));
});