test('sleep for 493 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 493));
});