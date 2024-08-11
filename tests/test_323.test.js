test('sleep for 474 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 474));
});