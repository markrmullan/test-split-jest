test('sleep for 267 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 267));
});