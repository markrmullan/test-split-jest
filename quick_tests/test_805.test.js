test('sleep for 466 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 466));
});