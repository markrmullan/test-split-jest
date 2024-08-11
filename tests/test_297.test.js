test('sleep for 690 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 690));
});