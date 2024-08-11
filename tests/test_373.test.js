test('sleep for 506 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 506));
});