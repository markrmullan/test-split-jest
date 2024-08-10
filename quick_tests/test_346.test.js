test('sleep for 707 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 707));
});