test('sleep for 472 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 472));
});