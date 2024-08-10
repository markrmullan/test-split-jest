test('sleep for 754 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 754));
});