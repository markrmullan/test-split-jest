test('sleep for 769 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 769));
});