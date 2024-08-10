test('sleep for 298 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 298));
});