test('sleep for 974 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 974));
});