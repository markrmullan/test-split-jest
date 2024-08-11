test('sleep for 504 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 504));
});