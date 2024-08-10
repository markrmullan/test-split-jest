test('sleep for 503 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 503));
});