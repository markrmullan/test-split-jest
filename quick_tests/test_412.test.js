test('sleep for 200 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 200));
});