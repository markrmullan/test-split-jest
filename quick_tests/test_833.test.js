test('sleep for 911 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 911));
});