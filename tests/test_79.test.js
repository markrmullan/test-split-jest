test('sleep for 548 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 548));
});