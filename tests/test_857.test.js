test('sleep for 723 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 723));
});