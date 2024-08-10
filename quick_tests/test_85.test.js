test('sleep for 151 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 151));
});