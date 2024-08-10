test('sleep for 330 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 330));
});