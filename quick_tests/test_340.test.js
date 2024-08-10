test('sleep for 288 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 288));
});