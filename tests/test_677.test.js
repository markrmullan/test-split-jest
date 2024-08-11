test('sleep for 394 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 394));
});