test('sleep for 659 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 659));
});