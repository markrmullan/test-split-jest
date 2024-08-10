test('sleep for 573 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 573));
});