test('sleep for 510 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 510));
});