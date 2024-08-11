test('sleep for 603 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 603));
});