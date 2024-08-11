test('sleep for 502 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 502));
});