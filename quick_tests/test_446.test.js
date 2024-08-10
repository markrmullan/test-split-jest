test('sleep for 822 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 822));
});