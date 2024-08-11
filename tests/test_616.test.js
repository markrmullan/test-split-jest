test('sleep for 348 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 348));
});