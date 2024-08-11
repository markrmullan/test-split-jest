test('sleep for 419 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 419));
});