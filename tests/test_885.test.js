test('sleep for 342 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 342));
});