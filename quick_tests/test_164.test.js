test('sleep for 63 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 63));
});