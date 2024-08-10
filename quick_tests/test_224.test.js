test('sleep for 225 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 225));
});