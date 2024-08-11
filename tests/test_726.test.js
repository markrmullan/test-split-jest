test('sleep for 315 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 315));
});