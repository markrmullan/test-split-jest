test('sleep for 285 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 285));
});