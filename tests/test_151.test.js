test('sleep for 530 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 530));
});