test('sleep for 162 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 162));
});