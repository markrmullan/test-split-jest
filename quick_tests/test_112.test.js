test('sleep for 746 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 746));
});