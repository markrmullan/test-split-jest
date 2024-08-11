test('sleep for 412 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 412));
});