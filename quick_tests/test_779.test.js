test('sleep for 542 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 542));
});