test('sleep for 23520 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 23520));
});