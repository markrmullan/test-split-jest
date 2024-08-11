test('sleep for 567 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 567));
});