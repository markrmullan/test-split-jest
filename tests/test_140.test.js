test('sleep for 143 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 143));
});