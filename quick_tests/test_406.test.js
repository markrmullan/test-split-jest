test('sleep for 59 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 59));
});