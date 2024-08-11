test('sleep for 17872 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 17872));
});