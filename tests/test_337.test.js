test('sleep for 885 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 885));
});