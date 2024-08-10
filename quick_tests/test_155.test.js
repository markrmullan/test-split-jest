test('sleep for 541 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 541));
});