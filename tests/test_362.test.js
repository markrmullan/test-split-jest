test('sleep for 492 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 492));
});