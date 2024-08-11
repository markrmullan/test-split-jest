test('sleep for 355 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 355));
});