test('sleep for 287 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 287));
});