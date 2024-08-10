test('sleep for 555 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 555));
});