test('sleep for 953 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 953));
});