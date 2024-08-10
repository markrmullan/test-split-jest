test('sleep for 179 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 179));
});