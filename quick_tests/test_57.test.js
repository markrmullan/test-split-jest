test('sleep for 60 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 60));
});