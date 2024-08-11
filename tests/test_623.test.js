test('sleep for 19742 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 19742));
});