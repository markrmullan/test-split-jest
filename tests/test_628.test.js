test('sleep for 25105 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 25105));
});