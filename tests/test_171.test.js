test('sleep for 367 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 367));
});