test('sleep for 352 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 352));
});