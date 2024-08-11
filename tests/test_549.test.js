test('sleep for 356 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 356));
});