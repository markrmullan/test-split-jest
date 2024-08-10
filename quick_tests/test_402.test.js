test('sleep for 655 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 655));
});