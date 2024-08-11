test('sleep for 574 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 574));
});