test('sleep for 935 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 935));
});