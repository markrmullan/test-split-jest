test('sleep for 170 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 170));
});