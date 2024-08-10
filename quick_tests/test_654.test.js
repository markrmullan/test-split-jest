test('sleep for 55 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 55));
});