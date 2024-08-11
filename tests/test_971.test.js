test('sleep for 247 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 247));
});