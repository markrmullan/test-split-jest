test('sleep for 141 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 141));
});