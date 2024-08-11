test('sleep for 192 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 192));
});