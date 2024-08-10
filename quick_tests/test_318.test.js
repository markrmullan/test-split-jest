test('sleep for 679 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 679));
});