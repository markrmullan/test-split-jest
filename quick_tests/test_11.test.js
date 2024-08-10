test('sleep for 110 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 110));
});