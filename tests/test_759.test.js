test('sleep for 383 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 383));
});