test('sleep for 371 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 371));
});