test('sleep for 163 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 163));
});