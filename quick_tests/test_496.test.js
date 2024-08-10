test('sleep for 175 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 175));
});