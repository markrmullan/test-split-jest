test('sleep for 364 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 364));
});