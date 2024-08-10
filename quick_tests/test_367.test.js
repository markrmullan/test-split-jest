test('sleep for 359 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 359));
});