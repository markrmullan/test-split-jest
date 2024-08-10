test('sleep for 552 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 552));
});