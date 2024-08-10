test('sleep for 942 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 942));
});