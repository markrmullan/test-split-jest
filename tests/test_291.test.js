test('sleep for 991 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 991));
});