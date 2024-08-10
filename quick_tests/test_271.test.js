test('sleep for 344 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 344));
});