test('sleep for 512 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 512));
});