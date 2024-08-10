test('sleep for 988 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 988));
});