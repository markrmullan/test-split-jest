test('sleep for 18359 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 18359));
});