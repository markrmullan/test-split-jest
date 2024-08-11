test('sleep for 518 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 518));
});