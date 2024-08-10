test('sleep for 910 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 910));
});