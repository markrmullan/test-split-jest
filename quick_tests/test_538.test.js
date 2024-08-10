test('sleep for 776 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 776));
});