test('sleep for 473 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 473));
});