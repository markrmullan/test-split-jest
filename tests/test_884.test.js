test('sleep for 909 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 909));
});